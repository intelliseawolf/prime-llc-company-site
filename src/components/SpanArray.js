const SpanArray = ({ letters }) => (
  letters.split("").map((letter, index) => (
    <span key={index} style={{ transform: `rotate(${index * 10}deg)` }}>{letter}</span>
  ))
)

export default SpanArray;
