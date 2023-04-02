import {RiArrowDropLeftLine} from 'react-icons/ri';
import {MdOutlineFileUpload} from 'react-icons/md';

import {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {useParams, useNavigate} from 'react-router-dom';

import {Ingredient} from '../../components/Ingredient';
import {HeaderAdm} from '../../components/HeaderAdm';
import {Footer} from '../../components/Footer';

import {Container, Form} from './styles';

export function AdminEdit() {
    const [imagem, setImagem] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredients] = useState([]);
    
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredientsRegistered, setIngredientsRegistered] = useState([]);

    const navigate = useNavigate();
    const params = useParams();

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

    useEffect(()=>{
        async function getIngredients(){
            const response = await api.get(`/ingredients/${params.id}`);
            setIngredientsRegistered(response.data)
        }
        getIngredients();
    },[]);

    const handleImagem = (event) => {
        const file = event.target.files[0];
        setImagem(file);
    };
    
    async function updatePlate(e){
        if(!imagem || ingredients.length === 0){
            e.preventDefault();
            return alert("Campo imagem ou ingredientes está vazio!");
        };
        
        alert("Prato alterado com sucesso!");
        navigate("/");
        
        await api.put(`/plates/${params.id}`, {
            title,
            category,
	        price,
	        description,
            ingredients
        });
        
        await api.put(`/ingredients/${params.id}`, {
            ingredients 
        });

        const fileUpload = new FormData();

        fileUpload.append("imgPlate", imagem);
        
        await api.patch(`/plates/${params.id}`, fileUpload);
    };

    async function deletePlate(){
        alert("Prato exluido com sucesso.");
        navigate("/");
        await api.delete(`/plates/${params.id}`)
    };
    
    function handleBack(){
        navigate(`/Details/${params.id}`);
    };

    useEffect(()=>{
        try{
            async function fecthPlate(){
                const response = await api.get(`/plates/${params.id}`)
                setTitle(response.data[0].title)
                setCategory(response.data[0].category)
                setPrice(response.data[0].price)
                setDescription(response.data[0].description)
            }
            fecthPlate();
        }catch(err){
            if(err.response){
                alert(err.response.data.message)
            }else{
                alert("Não foi possível carregar os dados do prato.")
            }
        };
    },[]);

    return(
        <Container>
            <HeaderAdm />

            <Form>
                <div className='wrapper_title_and_button'>
                    <button onClick={handleBack}>
                        <RiArrowDropLeftLine /> 
                        <span>voltar</span>
                    </button>
                    <h1>Editar prato</h1>
                </div>

                <div className='wrapper_inpunts'>
                    <div className='wrapper_plate'>
                        <div>
                            <label>
                                Imagem do prato
                                <div id='wrapper_file'>
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
                                    value={title}
                                    type='text'
                                    onChange={(e)=>setTitle(e.target.value)}
                                    />
                                </label>
                                
                                <label>
                                    Categoria
                                    <select onChange={(e)=>setCategory(e.target.value)} id="select">
                                        <option value="">{category}</option>
                                        <option value="Refeições">Refeições</option>
                                        <option value="Sobremesas">Sobremesas</option>
                                        <option value="Bebidas">Bebidas</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className='wrapper_ingredients_and_price'>
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

                                    <div className='ingredients_registered'>
                                        { ingredientsRegistered &&
                                        ingredientsRegistered.map((ingredient, index)=>(
                                            <Ingredient 
                                            shadow
                                            value={ingredient.name}
                                            key={String(index)}
                                            />
                                        ))
                                        }
                                    </div>
                                    
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
                                value={price}
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
                        value={description}
                        type='text'
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                </div>

                <div className='buttons'>
                    <button onClick={deletePlate}>Excluir prato</button>
                    <button onClick={updatePlate}>Salvar alterações</button>
                </div>
            </Form>

            <div className='wrapper_footer'>
                <Footer />
            </div>
        </Container>
    )
}