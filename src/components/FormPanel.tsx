import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from "@ant-design/icons"
import image1 from '../assets/image1.jpg'
import '../scss/right.scss'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
import TagButtonGroup from './TagButtonGroup';
import { tagButton }  from './tagButton'
import DatePickerProp from "./DatePickerProps";



  const StyledTextareaField = (props:any) => (
    <Field {...props} as="textarea" id="description" name="description" children={props.children}></Field>
  );
  
  interface FormPanelValuesProps {
    titleName: string;
  }
  
  export const FormPanelProps: React.FC<{}> = () => {

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log("Change:", e.target.value);
    };

    const initialValues: FormPanelValuesProps = { titleName: '' };


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
            <label className="title-of-posting"> Image <DeleteOutlined style={{ fontSize: 15 }} /></label>
            <div className='Image'> <img src={image1} alt="image1" className="image1"/></div>

            <label className='title-of-posting'>Description <EditOutlined /></label>
            <div className='sub-des'>
              <StyledTextareaField
                as={Field}
                defaultValue= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sit, illum dicta, magnam quas velit earum rerum aut totam fugiat atque, mollitia praesentium aperiam doloremque in natus minima voluptas non!"
                id="description"
                name="description"
                rows={4}
                onChange={onChange}
              ></StyledTextareaField>
            </div>

            <label className="title-of-posting">Date of Posting <PlusSquareOutlined style={{ fontSize: 15 }} /> </label>
            <DatePickerProp />

            <label className="title-of-posting">Tags</label>
            
            <div className="btn-tags"><TagButtonGroup tagButton={tagButton}/></div>
          </Form>

        </Formik>
      </div>
    );
  };


  