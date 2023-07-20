import { t } from "i18next";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="text-center py-4">
      <Typography variant="h5" display="block" gutterBottom>
        {t("CounterExample")}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {count}
      </Typography>
      <div className="mt-12">
        <Button
          className="!mr-3"
          variant="contained"
          onClick={() => dispatch(increment())}
        >
          Incerement
        </Button>
        <Button
          className="!ml-3"
          variant="contained"
          onClick={() => dispatch(decrement())}
        >
          Decerement
        </Button>
      </div>
    </div>
  );
}
