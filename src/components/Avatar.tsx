// Avatar.tsx
import React, { useState } from 'react';

interface AvatarProps {
  onAvatarSelect: (avatarSrc: string) => void;
}

const avatars = [
  'src/assets/Heroe.png',
  '/images/profile-picture-2.webp',
  '/images/profile-picture-3.webp'
];

const Avatar: React.FC<AvatarProps> = ({ onAvatarSelect }) => {
    const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  
    const handleAvatarClick = (avatarSrc: string) => {
      setSelectedAvatar(avatarSrc);
      onAvatarSelect(avatarSrc);
    };
  

return (
        <div className="avatar-list">
          {avatars.map((avatarSrc, index) => (
            <img
              key={index}
              src={avatarSrc}
              alt={`Avatar ${index + 1}`}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'transform 0.3s, border 0.3s',
                border: selectedAvatar === avatarSrc ? '2px solid #FF0000' : 'none',
                transform: selectedAvatar === avatarSrc ? 'scale(1.1)' : 'none'
              }}
              onClick={() => handleAvatarClick(avatarSrc)}
            />
          ))}
        </div>
      );
    };
    

export default Avatar;
