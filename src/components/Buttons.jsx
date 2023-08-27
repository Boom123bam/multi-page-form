export default function Buttons({
  back = false,
  next = false,
  confirm = false,
}) {
  return (
    <>
      {back && (
        <button className="back" onClick={back}>
          Go Back
        </button>
      )}

      {next && (
        <button className="next" onClick={next}>
          Next Step
        </button>
      )}
      {confirm && (
        <button className="confirm" onClick={confirm}>
          Confirm
        </button>
      )}
    </>
  );
}
