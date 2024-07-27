import { useState } from "react"
import useShowToast from "./useShowToast"
import useAuthStore from "../store/authStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import usePostStore from "../store/postStore";
import Filter from 'bad-words';
import useStore from "../store/FilterComment";

function usePostComment() {
  const [isCommenting, setIsCommenting] = useState(false)
  const showToast = useShowToast();
  const authUser = useAuthStore(state => state.user)
  const addComment = usePostStore(state => state.addComment)

  const filter = new Filter()

  const {filterComments, setFilterComments} = useStore()

  // const filterComment = (postId, comment, isChecked) => {
  //   if(isChecked && filter.isProfane(comment)) return showToast("Error","The Comment contains insensitive words","error")
  // }

  const handlePostComment = async(postId, comment) => {
      if(isCommenting) return 

    if(!authUser) return showToast("Error","You must be logged in to comment","error")
    if(comment === '' ) return

    //filters out comments
    if(filterComments && postId && filter.isProfane(comment)) return showToast("Error","The Comment contains insensitive words","error")
    



    setIsCommenting(true)
    

    const newComment = {
        comment,
        createdAt: Date.now(),
        createdBy: authUser.uid,
        postId
    }
    
    try {
        await updateDoc(doc(firestore,"posts",postId),{
            comments: arrayUnion(newComment)
        })
        addComment(postId,newComment)

    } catch (error) {
        showToast("Error", error.message, "error")
    }finally{
        setIsCommenting(false)
    }
  }
  return {isCommenting, handlePostComment}
}

export default usePostComment