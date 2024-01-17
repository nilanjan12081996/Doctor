import { configureStore,  } from "@reduxjs/toolkit";
import { authSlice } from "../Redux/authSlice";
import { loginSlice } from "../Redux/loginSlice";
import { deptSlice } from "../Redux/deptSlice";
import { allDocByDeptSlice } from "../Redux/allDocByDeptSlice";
import { SingleDoctorSlice } from "../Redux/SingleDoctorSlice";
import { AllDocDeptSlice } from "../Redux/AllDocDeptSlice";
import { AllBlogSlice } from "../Redux/AllBlogSlice";
import { SearchSlice } from "../Redux/SearchSlice";
import { RecentBlogSlice } from "../Redux/RecentBlogSlice";
import { SingleBlogSlice } from "../Redux/SingleBlogSlice";
import { GetCommentSlice } from "../Redux/GetCommentSlice";

export const Store=configureStore(
    {
        reducer:{
            auth:authSlice.reducer,
            auth1:loginSlice.reducer,
            depts:deptSlice.reducer,
            dept_wise_doc:allDocByDeptSlice.reducer,
            single_doc:SingleDoctorSlice.reducer,
            alldoctors:AllDocDeptSlice.reducer,
            blogs:AllBlogSlice.reducer,
            blogs_search:SearchSlice.reducer,
            recent_Blogs:RecentBlogSlice.reducer,
            oneBlog:SingleBlogSlice.reducer,
            commnets_details:GetCommentSlice.reducer
        }
    }
)