import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Employee } from "../../../models/Employee";
import {
  employeesApi,
  useUpdateEmployeeStateMutation,
} from "../../../store/api/employees/employees";
import { AppDispatch, RootState } from "../../../store/store.config";
import Stepper from "../../../ui/Stepper/Stepper";

interface Props {
  employeeId: Employee["id"];
  employeeState: Employee["state"];
}

export default function State({
  employeeId,
  employeeState,
}: Props): ReactElement {
  const dispatch: AppDispatch = useDispatch();
  const employeeApi = employeesApi;
  const page = useSelector((state: RootState) => state["page"]);

  const employeeStateLabels: { [key in Employee["state"]]: string } = {
    added: "Added",
    in_check: "In check",
    approved: "Approved",
    active: "Active",
    inactive: "In active",
  };

  const [updateEmployee, { isLoading, isSuccess }] =
    useUpdateEmployeeStateMutation({});

  React.useEffect(
    function refetchEmployeesOnRequestSuccess() {
      if (isSuccess) {
        dispatch(
          employeeApi.util.prefetch(
            "getEmployees",
            { page },
            {
              force: true,
            }
          )
        );

        toast("Employee was updated successfully", {
          type: "success",
        });
      }
    },
    [isSuccess]
  );

  return (
    <Stepper
      steps={Object.values(employeeStateLabels)}
      currentStep={employeeStateLabels[employeeState]}
      stepWasClicked={(step) =>
        updateEmployee({
          id: employeeId,
          state: Object.keys(employeeStateLabels).find(
            (_item) =>
              employeeStateLabels[_item as keyof typeof employeeStateLabels] ===
              step
          ) as Employee["state"],
        })
      }
    />
  );
}
