import { useState } from "react";
import InputArea from "../components/InputArea";
import Modal from "../stories/Modal";
import { Button } from "../stories/Button";
import { useForm } from "react-hook-form";
import { validation } from "../helpers/validation";
type userDataProps = {
  email: string;
  name: string;
  phone: string;
  surname: string;
};

const Form = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState<userDataProps | undefined>();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (data) => {
    reset();
    setUserData(data);
    setOpenModal(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xl border-black">
        <form
          onSubmit={handleSubmit(handleOpenModal)}
          className="bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 border-2"
        >
          <InputArea
            validation={validation.email}
            register={register}
            label={"Email"}
            htmlFor={"email"}
            errorMsg={"email"}
            hasError={errors.email}
            error={false}
          />
          <InputArea
            validation={validation.name}
            register={register}
            label={"Name"}
            hasError={errors.name}
            htmlFor={"name"}
            errorMsg={"name"}
            error={false}
          />
          <InputArea
            validation={validation.surname}
            register={register}
            label={"Surname"}
            htmlFor={"surname"}
            hasError={errors.surname}
            errorMsg={"surname"}
            error={false}
          />
          <InputArea
            validation={validation.phone}
            register={register}
            label={"Phone"}
            hasError={errors.phone}
            htmlFor={"phone"}
            errorMsg={"phone"}
            error={false}
          />
          <div className="flex items-center justify-center">
            <Button label="Open modal" primary={false} />
          </div>
        </form>
      </div>
      <Modal userData={userData} title={"Request pokemons"} open={openModal} onClose={handleCloseModal}></Modal>
    </div>
  );
};
export default Form;
