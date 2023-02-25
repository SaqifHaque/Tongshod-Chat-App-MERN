import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/UIControls/Button'
import Card from '../../../components/UIControls/Card'
import avatar from '../../../assets/avatar.png';
import { SET_AVATAR } from '../../../redux/features/activate/activateSlice';
import { activate } from '../../../api/authAPI';
import { SET_AUTH } from '../../../redux/features/auth/authSlice';
import { LoaderCard } from '../../../components/loader/Loader';

const StepAvatar = ({onNext}) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const { image, setImage } = useState(avatar);
  const { loading, setLoading } = useState(false);
  const { unMounted, setUnMounted } = useState()

  const captureImage = (e) => {
    const file = e.target.files[0];
    const previewImage = URL.createObjectURL(file)
    setImage(previewImage);
    dispatch(SET_AVATAR(previewImage))
    

    console.log(e);
  }

  const onSubmit = async () => {
    if(!name || !avatar) return;
    setLoading(true);
    try {
       const { data } = await activate({ name, image });

       if(data.auth) {
          if(!unMounted){
            dispatch(SET_AUTH(data));
          }
          
       }

    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setUnMounted(true);
    }
  }, [])

  if(loading) return <LoaderCard message="Activation in Progress..."/>;

  return (
    <Card title={`Okay, ${name}`}>
       <p className="text-center font-thin text-gray-300 font-md font-sans">How's this photo?</p>
       <div>
        <img className="w-24 h-24 p-1 rounded-full ring-2 ring-blue-600 dark:ring-gray-500" src={avatar} alt="avatar" loading="lazy"/>
       </div>
       <div>
          <input onChange={(e) => captureImage(e)} id="avatarInput" type="file" className="hidden"/>
          <label htmlFor="avatarInput" className="text-blue-500 underline text-xs font-md font-sans">Choose a different photo</label>
      </div>
      <Button onButtonClick={onSubmit} title="Next  ->"></Button>
  </Card>
  )
}

export default StepAvatar