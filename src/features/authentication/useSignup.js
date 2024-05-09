import { useMutation } from "@tanstack/react-query";
import { signup as signupAip } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAip,
    onSuccess: (user) => {
      toast.success(
        "Account Created Successfully ! Please Verfiy The New Account From The User's Email Address "
      );
    },
  });

  return { signup, isLoading };
}
