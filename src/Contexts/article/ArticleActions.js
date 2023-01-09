import Swal from "sweetalert2";
import { articleApi } from "../../app/api"; 


export const getAllArticles = async () => {
    try {
        const allArticles = await articleApi.get();

        return allArticles.data
    } catch (error) {
        console.log(error);
    }
};
export const deleteArticle = (id) => {
    let status = 0
    return Swal.fire({
        title: "Are you sure?",
        text: "Yهل أنت متأكد من أنك تريد الحذف!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم, احذفها!",
    }).then(async (result) => {
        try {
            if (result.isConfirmed) {
                const response = await articleApi.delete(
                    `/${ id }`
                );
                status = response.status 
                if (status === 200) {
                    
                    Swal.fire("Deleted!", "تم حذف المقالة.", "success");
                }
                return status
            }
        } catch (error) {
            console.log(error);
        }
    });
    
};
