import './SectionHeading.css';

function SectionHeading({ heading, aditionalClass }) {
  return (
    <h2 className={`section__heading ${aditionalClass}`}>{heading}</h2>
  )
}

export default SectionHeading;