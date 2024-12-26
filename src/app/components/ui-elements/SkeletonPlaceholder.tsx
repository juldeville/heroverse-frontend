import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

interface SkeletonPlaceholderProps {
  size: "single" | "multiple";
}
export default function SkeletonPlaceholder({ size }: SkeletonPlaceholderProps) {
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
  if (size === "multiple") {
    return <div className="flex flex-wrap gap-6 justify-center">{stacks}</div>;
  }

  if (size === "single") {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}

        <Skeleton variant="rectangular" width={520} height={560} />
      </Stack>
    );
  }
}
