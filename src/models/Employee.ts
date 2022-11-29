export type Employee = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  state: "added" | "in_check" | "approved" | "active" | "inactive";
};
