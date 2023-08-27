export default function PlanItem({
  title,
  monthlyPrice,
  yearlyPrice,
  displayMonthly = true,
  selected = false,
}) {
  return (
    <div className={`plan-item${selected ? " selected" : ""}`}>
      <h2>{title}</h2>
      <h3>
        {displayMonthly
          ? `$${monthlyPrice}/mo`
          : `$${yearlyPrice}/yr`}
      </h3>
      {!displayMonthly && <h4>2 months free</h4>}
    </div>
  );
}
