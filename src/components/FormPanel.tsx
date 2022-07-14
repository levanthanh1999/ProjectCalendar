import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import "../scss/right.scss";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import TagButtonGroup from "./TagButtonGroup";
import { tagButton } from "./tagButton";
import DatePickerProp from "./DatePickerProps";
import { Carousel } from "antd";
import DataImage from "./DataImage";
import { ButtonStyle } from "./ButtonStyle";
import styled from "styled-components";
import { RootState } from "../redux/rootReducer";
import { useSelector } from "react-redux";

// const BtnSubmit = styled(ButtonStyle)`
//   padding: 20px 30px;
//   height: 15px;
//   margin: 20px;
//   float: right;
// `;

const contentStyle: React.CSSProperties = {
  borderRadius: "50px",
  height: "180px",
  color: "#fff",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  margin: '50px',
  width: '80%',
};

const StyledTextareaField = (props: any) => (
  <Field
    {...props}
    as="textarea"
    id="description"
    name="description"
    children={props.children}
  ></Field>
);

interface FormPanelValuesProps {
  titleName: string;
}

export const FormPanelProps: React.FC<{}> = () => {
  const imageSource = useSelector((state: RootState) => state.valueImage.imageSource)
  const desSource = useSelector((state: RootState) => state.valueImage.desSource)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value);
  };

  const initialValues: FormPanelValuesProps = { titleName: "" };

  return (
    <div>
      <h1 className="title-postting">Post Settings</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label className="title-of-posting">
            Image <DeleteOutlined style={{ fontSize: 15 }} />
          </label>
          <Carousel autoplay>
            {imageSource.map((img, index) => (
              <div key={index}>
                {<img src={img} style={contentStyle} />}
              </div>
            ))}
          </Carousel>

          <label className="title-of-posting">
            Description <EditOutlined />
          </label>
          <div className="sub-des">
            <StyledTextareaField
              as={Field}
              defaultValue={desSource}
              id="description"
              name="description"
              rows={4}
              onChange={onChange}
            ></StyledTextareaField>
          </div>

          <label className="title-of-posting">
            Date of Posting <PlusSquareOutlined style={{ fontSize: 15 }} />{" "}
          </label>
          <DatePickerProp />

          <label className="title-of-posting">Tags</label>

          <div className="btn-tags">
            <TagButtonGroup tagButton={tagButton} />
          </div>
{/* 
          <BtnSubmit type="submit">Submit</BtnSubmit> */}
        </Form>
      </Formik>
    </div>
  );
};
