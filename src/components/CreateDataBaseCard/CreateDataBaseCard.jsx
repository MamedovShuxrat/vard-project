import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./createDataBaseCard.module.scss";
import SimpleInput from "../ui/Inputs/SimpleInput";

const CreateDataBaseCard = ({ formData, onFormDataChange, onSubmit }) => {
  const [localFormData, setLocalFormData] = useState(formData);
  const [dbType, setDbType] = useState(formData.dbType || "");
  const [driver, setDriver] = useState(formData.driver || "");

  useEffect(() => {
    console.log("CreateDataBaseCard rendered with formData:", formData);
    setLocalFormData(formData);
    setDbType(formData.dbType || "");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...localFormData, [name]: value };
    setLocalFormData(updatedFormData);
    console.log(`handleChange called with name: ${name}, value: ${value}`);
    onFormDataChange(updatedFormData);
  };

  const handleDbTypeChange = (e) => {
    const value = e.target.value;
    setDbType(value);
    handleChange(e);
  };

  const handleDriverChange = (e) => {
    const value = e.target.value;
    setDriver(value);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormData);
  };

  return (
    <div className={styles.CardWrapper}>
      <form onSubmit={handleSubmit} className={styles.formData}>
        <SimpleInput
          placeholder="User"
          name="user_name"
          value={localFormData.user || ""}
          className="dataBaseInput"
          onChange={handleChange}
        />
        <SimpleInput
          placeholder="Password"
          name="password"
          value={localFormData.password || ""}
          className="dataBaseInput"
          onChange={handleChange}
        />
        <SimpleInput
          placeholder="Data Base"
          name="dbName"
          value={localFormData.dbName || ""}
          className="dataBaseInput"
          onChange={handleChange}
        />
        <SimpleInput
          placeholder="Description"
          name="description"
          value={localFormData.description || ""}
          className="dataBaseInput"
          onChange={handleChange}
        />
        <div className={`${styles.selectWrapper} dataBaseInput`}>
          <label htmlFor="dbType" className={styles.selectLabel}>
            Data Base Type
          </label>
          <select
            id="dbType"
            name="dbType"
            value={dbType}
            className={styles.selectInput}
            onChange={handleDbTypeChange}
          >
            <option value="">Select Database Type</option>
            <option value="MySQL">MySQL</option>
          </select>
        </div>
        {dbType === "MySQL" && (
          <SimpleInput
            placeholder="URL"
            name="url"
            value={localFormData.url || ""}
            className="dataBaseInput"
            onChange={handleChange}
          />
        )}
        <div className={`${styles.selectWrapper} driverInput`}>
          <label htmlFor="driver" className={styles.selectLabel}>
            Data Base Type
          </label>
          <select
            id="driver"
            name="driver"
            value={driver}
            className={styles.selectInput}
            onChange={handleDriverChange}
          >
            <option value="">Select Driver</option>
            <option value="SQL Alchemy">sql alchemy mssql+pyodbc</option>
          </select>
        </div>
        {dbType === "SQL Alchemy" && (
          <SimpleInput
            placeholder="Driver"
            name="driver"
            value={localFormData.url || ""}
            className="dataBaseInput"
            onChange={handleChange}
          />
        )}
        <span className={styles.formDataDescr}>
          Connections between VARD and your database will be encrypted
        </span>
        <button
          type="submit"
          className={`${styles.formDataBtn} ${styles.formDataBtnBlue}`}
        >
          Connect
        </button>
      </form>
    </div>
  );
};

CreateDataBaseCard.propTypes = {
  formData: PropTypes.shape({
    user: PropTypes.string,
    password: PropTypes.string,
    dbType: PropTypes.string,
    dbName: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  onFormDataChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired // Добавляем пропс onSubmit
};

export default CreateDataBaseCard;
