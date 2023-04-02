import {RiArrowDropLeftLine} from 'react-icons/ri';
import {MdOutlineFileUpload} from 'react-icons/md';

import {Ingredient} from '../../components/Ingredient';
import {HeaderAdm} from '../../components/HeaderAdm';
import {Footer} from '../../components/Footer';
import {api} from '../../services/api';

import {useNavigate} from 'react-router-dom'
import {useState} from 'react';

import {Container, Form} from './styles'

export function AdminAddPlate() {
    const [imagem, setImagem] = useState(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredients] = useState([]);
    
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleAddIngredient() {
        if(!newIngredient){
            return
        }else{
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredients("");
        };
    };
    
    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
    };
    
    const handleImagem = (event) => {
        const file = event.target.files[0];
        setImagem(file);
    };

    async function createPlate(e){
        if(!imagem || !title || !category || !ingredients || !description){
            e.preventDefault();
            alert("Existe campo vazio!")
        }else{

            const fileUpload = new FormData();
        
            fileUpload.append("imgPlate", imagem);
    
            fileUpload.append("data",JSON.stringify({
                title,
                category,
                description,
                ingredients,
                price,
            }));
        
            alert("Prato adicionado com sucesso!");
            handleBackHome();
            await api.post("/plates", fileUpload);
        }          
    };

    function handleBackHome(){
        return navigate("/");
    };

    return(
        <Container>
            <HeaderAdm />

            <Form>
                <div className='wrapper_title_and_button'>
                    <button onClick={handleBackHome}>
                        <RiArrowDropLeftLine />
                        <span>voltar</span>
                    </button>
                    <h1>Adicionar prato</h1>
                </div>

                <div className='wrapper_inpunts'>
                    <div className='wrapper_plate'>
                        <div>
                            <label>
                                Imagem do prato
                                <div>
                                    <MdOutlineFileUpload />
                                    Selecione imagem
                                    <input 
                                    type='file' 
                                    onChange={handleImagem}
                                    />
                                </div>
                            </label>

                            <div className='wrapper_name_category'>
                                <label>
                                    Nome
                                    <input 
                                    maxLength={25}
                                    placeholder='Ex: Salada Ceasar'
                                    type='text'
                                    onChange={(e)=>setTitle(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Categoria
                                    <select onChange={(e)=>setCategory(e.target.value)} id="select">
                                        <option value="">Selecionar</option>
                                        <option value="Refeições">Refeições</option>
                                        <option value="Sobremesas">Sobremesas</option>
                                        <option value="Bebidas">Bebidas</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className='wrapper_ingredients_price'>
                            <div>
                                <label htmlFor='ingredients'>
                                    Ingredientes
                                </label>

                                <div className='ingredients'>
                                    <Ingredient 
                                    isNew 
                                    placeholder="ingrediente" 
                                    onChange={e =>setNewIngredients(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                    />
                                    
                                    {
                                        ingredients.map((ingredient, index)=>(
                                            <Ingredient 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={()=> handleRemoveIngredient(ingredient)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <label>
                                Preço
                                <input
                                placeholder='R$ 00,00'
                                type='number'
                                onChange={(e)=>setPrice(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <label>
                        Descrição
                        <textarea
                        maxLength={150}
                        placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
                        type='text'
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                </div>

                <div className='button'>
                    <button onClick={createPlate}>Adicionar novo prato</button>
                </div>
            </Form>

            <div className='wrapper_footer'>
                <Footer />
            </div>
        </Container>
    )
}