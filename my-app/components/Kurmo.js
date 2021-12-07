import React from 'react'

const Kurmo = () => {
    return (
      <div class="kurmo">
        <div class="santa-container" style={{
             width: '100vw',
             height: '100vh',
             display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
         <div class="santa-hat" style={{
           backgroundImage: "url(" + "https://i.ibb.co/pJ9ZbrW/hat.png" + ")",
           animation: 'MoveUpDown 3s linear infinite',
              maxWidth: '500px',
              width: '100%',
              height: '100px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
          }}></div>
         <div class="santa-claus" style={{
           backgroundImage: "url(" + "https://i.ibb.co/vLD8Gkw/santa.png" + ")",
           maxWidth: '500px',
           width: '100%',
           height: '500px',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'contain',
           backgroundPosition: 'center',
          }}></div>
        </div>
      </div>
    )
}

export default Kurmo
