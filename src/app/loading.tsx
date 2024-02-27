import RiseLoader  from "react-spinners/RiseLoader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="loader">
      <RiseLoader
        color="#fff"
        loading={true}
        size={34}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
}
