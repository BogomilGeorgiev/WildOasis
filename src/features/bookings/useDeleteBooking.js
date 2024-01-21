import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {

    const queryClient = useQueryClient();


    const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
        mutationFn: deleteBookingAPI,

        onSuccess: () => {
            toast.success(`You have successfully deleted the booking`),

                queryClient.invalidateQueries({
                    queryKey: ["bookings"]
                });
        },

        onError: (err) => toast.error(err.message)

    });

    return { deleteBooking, isDeletingBooking }
}

export default useDeleteBooking
