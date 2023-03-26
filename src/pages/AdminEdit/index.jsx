import {RiArrowDropLeftLine} from 'react-icons/ri';
import {MdOutlineFileUpload} from 'react-icons/md';

import {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {useParams, useNavigate} from 'react-router-dom'

import {HeaderAdm} from '../../components/HeaderAdm';
import {Ingredient} from '../../components/Ingredient';

import {Button} from '../../components/Button'
import {Footer} from '../../components/Footer'

import {Container, Form} from './styles'

export function AdminEdit() {
    const [platePreview, setPlatePreview] = useState([]);

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
        }
    }
    
    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
    }

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
    }  
    
    async function updatePlate(e){
        if(!imagem || !title || !category || !ingredients || !description){
            e.preventDefault();
            return alert("Existe campo vazio!");
        }
        
        alert("Prato alterado com sucesso!");
        //navigate(`/Details/${params.id}`)
        navigate("/");
        
        //comentei essa parte pq tentei tirar o update do platesController e
        //colocar em uma rota pro controller de favorite, só que a imagem
        //n att. 
        // await api.put(`/favorites/${params.id}`, {
        //     title,
        //     category,
        //     price,
        //     description 
        // });

        await api.put(`/plates/${params.id}`, {
            title,
            category,
	        price,
	        description
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
    }
    
    function handleBack(){
        navigate(`/Details/${params.id}`);
    }

    useEffect(()=>{
        async function fecthPlate(){
            const response = await api.get(`/plates/${params.id}`)
            setPlatePreview(response.data[0])
        }
        fecthPlate();
    },[])

    return(
        <Container>
            <HeaderAdm />

            <Form>
                <div className='wrapper_title_and_button'>
                    <button onClick={handleBack}>
                        <RiArrowDropLeftLine /> voltar
                    </button>
                    <h1>Editar prato</h1>
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
                                   
                                    value={platePreview.title}
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
                                placeholder={platePreview.price}
                                type='number'
                                onChange={(e)=>setPrice(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <label>
                        Descrição
                        <textarea
                        placeholder={platePreview.description}
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