import axios from "axios";
import { useEffect, useState } from "react";

type userDataProps = {
  email: string;
  name: string;
  phone: string;
  surname: string;
};

interface FormRequestModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  userData: userDataProps;
}

const pokemonNames = ["ditto", "pikachu", "charmander"];

const Modal = ({ open, onClose, title, userData }: FormRequestModalProps) => {
  const [pokemonImagesUrl, setPokemonImagesUrl] = useState<string[]>([]);
  useEffect(() => {
    if (open && !pokemonImagesUrl.length) {
      const fetchPokemonImages = async () => {
        try {
          const responses = await Promise.all(
            pokemonNames.map((name) => axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
          );
          responses.map((response) => setPokemonImagesUrl((prev) => [...prev, response.data.sprites.front_default]));
        } catch (error) {
          console.error(error);
        }
      };

      fetchPokemonImages();
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="bg-neutral-900/50  absolute w-full h-full">
      <div className="absolute top-0 left-0 right-0 justify-center items-center flex z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white border rounded-lg shadow dark:bg-white">
            <div className="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-100/50 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                data-modal-hide="defaultModal"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {Object.keys(userData).map((key, index) => {
                  return (
                    <div key={index}>
                      {key}: {userData[key]}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 border-t border-gray-200 rounded-b min-h-[105px] ">
              {pokemonImagesUrl?.map((imageUrl, i) => (
                <img key={i} src={imageUrl} alt="pokemon" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
