import { getBillRequestMy } from '../api-manager/bill';
import { getTravelRequestMy } from '../api-manager/travel';

export const getTypeColor = type => {
  switch (type.toLowerCase()) {
    case 'open':
      return {
        backgroundColor: '#FFBF00',
        color: '#000000',
      };
    case 'completed':
      return {
        backgroundColor: '#228B22',
        color: '#FFFFFF',
      };
    default:
      return { color: '#EE4B2B', backgroundColor: '#228B22' };
  }
};

export const validateForm = (values, setError) => {
  let hasError = false;
  if (!values?.userId || values.userId.trim() === '') {
    setError(prevState => ({
      ...prevState,
      userId: 'UserId should not be empty',
    }));
    hasError = true;
  } else if (values?.userId.trim().length < 4) {
    setError(prevState => ({
      ...prevState,
      userId: 'UserId should be at least 4 characters long',
    }));
    hasError = true;
  } else {
    setError(prevState => ({ ...prevState, userId: '' }));
  }

  if (!values?.password || values.password.trim() === '') {
    setError(prevState => ({
      ...prevState,
      password: 'Password should not be empty',
    }));
    hasError = true;
  } else if (values?.password.trim().length < 6) {
    setError(prevState => ({
      ...prevState,
      password: 'Password should be at least 6 characters long',
    }));
    hasError = true;
  } else {
    setError(prevState => ({
      ...prevState,
      password: '',
    }));
  }

  return hasError;
};

export const getTravelRequestDetails = async () => {
  const data = await getTravelRequestMy('V24565');

  let pending = 0,
    totalTravelRequests = data?.length,
    rejected = 0,
    approved = 0,
    tManager = 0,
    tAdmin = 0,
    tHOD = 0;

  for (let i = 0; i < data?.length; i++) {
    if (data?.[i]?.approvalStatusCodeNavigation?.statusName === 'Pending') {
      pending++;
    } else if (
      data?.[i]?.approvalStatusCodeNavigation?.statusName === 'rejected'
    ) {
      rejected++;
    } else {
      approved++;
    }

    if (data?.[i]?.isManagerApproved) {
      if (data?.[i]?.isAdminApproved) {
        if (!data?.[i]?.isHODApproved) {
          tHOD++;
        }
      } else {
        tAdmin++;
      }
    } else {
      tManager++;
    }
  }

  return {
    pending,
    totalTravelRequests,
    rejected,
    approved,
    tManager,
    tAdmin,
    tHOD,
  };
};

export const getBillRequestDetails = async () => {
  try {
    const data = await getBillRequestMy('V24565');
    let pendingBill = 0,
      totalBillRequest = data?.length,
      rejectedBill = 0,
      approvedBill = 0,
      manager = 0,
      rlp = 0,
      audit = 0,
      finance = 0;

    for (let i = 0; i < data?.length; i++) {
      if (data?.[i]?.approvalStatusName === 'Pending') {
        pendingBill++;
      } else if (data?.[i]?.approvalStatusName === 'Rejected') {
        rejectedBill++;
      } else {
        approvedBill++;
      }

      if (data?.[i]?.isManagerApproved) {
        if (data?.[i]?.isRLPApproved) {
          if (data?.[i]?.isAuditApproved) {
            if (!data?.[i]?.isAccountApproved) {
              finance++;
            }
          } else {
            audit++;
          }
        } else {
          rlp++;
        }
      } else {
        manager++;
      }
    }
    return {
      pendingBill,
      totalBillRequest,
      rejectedBill,
      approvedBill,
      manager,
      rlp,
      audit,
      finance,
    };
  } catch (err) {
    console.error(err);
  }
};
