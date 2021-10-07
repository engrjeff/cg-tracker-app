import React, { useState, useCallback } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import TextLead from "../../components/TextLead";
import FormInput from "../../components/FormInput";

import { useAuth } from "../../firebase/AuthContext";

import imgPlaceholder from "../../images/imgplaceholder.jpg";
import useStorage from "../../firebase/useStorage";
import ProgressBar from "../../components/ProgressBar";

function Profile(props) {
  const { user, updateUserProfile, updateUserPhoto } = useAuth();

  const [name, setName] = useState(user.displayName || "");
  const [file, setFile] = useState(null);
  const [isFormShown, setIsFormShown] = useState(false);

  const updatePhoto = useCallback(updateUserPhoto, [updateUserPhoto]);
  const path = `user/${user.uid}`;
  const { progress } = useStorage(file, path, updatePhoto);

  const types = ["image/png", "image/jpeg"];

  function handleFileChange(e) {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  }

  function handleUserProfileUpdate() {
    updateUserProfile(name);
    setIsFormShown(false);
  }

  const image = user.photoURL ? user.photoURL : imgPlaceholder;

  return (
    <Box rounded className='flex-1 text-center'>
      <Box borderedBottom>
        <TextLead>Profile Information</TextLead>
      </Box>
      <Box className='p-3 d-flex flex-column align-items-center'>
        <Box className='profile-photo'>
          <img src={image} alt={user.displayName} />
          <input
            type='file'
            accept='image/png, image/jpeg'
            className='profile-photo-input'
            onChange={handleFileChange}
          />
        </Box>
        {file && (
          <ProgressBar
            progress={progress}
            className='w-50'
            onDone={() => setFile(null)}
          />
        )}
        <Box className='mt-4'>
          <p className='text-size-20 fw-600'>{user.displayName}</p>
          <p className='text-size-14 fw-400'>{user.email}</p>
        </Box>
        {!isFormShown && (
          <Button
            text='Update Name'
            color='info'
            className='my-3'
            onClick={() => setIsFormShown(true)}
          />
        )}
        {isFormShown && (
          <Box className='my-3'>
            <FormInput
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
            />
            <Box className='d-flex mt-3'>
              <Button
                disabled={!name}
                text='Update'
                color='info'
                onClick={handleUserProfileUpdate}
              />
              <Button
                onClick={() => setIsFormShown(false)}
                text='Cancel'
                color='secondary'
                className='ml-3'
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Profile;
