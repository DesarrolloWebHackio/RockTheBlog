import "./TimeLine.css";

export const TimeLine = (array) => {
  const arraySorted = array.toSorted(
    (a, b) => parseInt(b.date.slice(0, 4)) - parseInt(a.date.slice(0, 4))
  );

  const timeLine = document.createElement("div");
  timeLine.classList.add("timeLine");
  const spine = document.createElement("hr");
  spine.classList.add("spine", "contrast");

  for (const element of arraySorted) {
    const rib = document.createElement("div");
    rib.classList.add("rib");

    const hr = document.createElement("hr");
    hr.classList.add("contrast")
    const text = document.createElement("p");
    text.textContent = element.date;

    rib.append(text, hr);
    timeLine.append(rib);
  }

  timeLine.append(spine);
  return timeLine;
};
