import { CircularProgress } from "@mui/material";
import { Condition } from "../common";

export const PageLoader = ({ loading = true, children }) => (
  <>
    <Condition show={loading}>
      <div className="flex items-center justify-center h-full  p-8 min-h-screen -mt-16">
        <div>
          <div className="text-center">
            <CircularProgress color="primary" size={40} />
          </div>
          <div>Loading ....</div>
        </div>
      </div>
    </Condition>
    {children}
  </>
);

export default PageLoader;
