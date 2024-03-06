import app from "./app";
import seas from "@christian-hoeller/zod-sst-demo";

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  seas();
});
