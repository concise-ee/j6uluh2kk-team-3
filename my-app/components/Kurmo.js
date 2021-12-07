import React from 'react'

const Kurmo = () => {
    return (
      <div class="kurmo">
        <div class="santa-container" style={{
          backgroundImage: "url(" + "https://gcdn.pbrd.co/images/dfIb1pPCtZtc.jpg" + ")",
             width: '100vw',
             height: '100vh',
             display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}>
         <div class="santa-hat" style={{
           backgroundImage: "url(" + "https://i.ibb.co/pJ9ZbrW/hat.png" + ")",
           animation: 'MoveUpDown 3s linear infinite',
              maxWidth: '400px',
              width: '100%',
              height: '100px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
          }}></div>
         <div class="santa-claus" style={{
           backgroundImage: "url(" + "https://i.ibb.co/vLD8Gkw/santa.png" + ")",
           maxWidth: '400px',
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
