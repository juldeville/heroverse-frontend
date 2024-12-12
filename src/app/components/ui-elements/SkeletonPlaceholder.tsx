import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonPlaceholder() {
  let stacks = [];
  for (let i = 0; i < 8; i++) {
    stacks.push(
      <Stack spacing={1} key={i}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />
        <Skeleton variant="rectangular" width={260} height={60} />
        <Skeleton variant="rounded" width={260} height={60} />
      </Stack>
    );
  }
  return <div className="flex flex-wrap gap-6 justify-center">{stacks}</div>;
}
