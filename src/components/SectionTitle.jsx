const SectionTitle = ({
  label,
  title,
  highlight,
  description,
  center = false,
}) => {
  return (
    <div className={`section-heading ${center ? "text-center" : ""}`}>
      {label && <span className="section-label">{label}</span>}

      <h2 className="section-title">
        {title}{" "}
        {highlight && <span>{highlight}</span>}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;