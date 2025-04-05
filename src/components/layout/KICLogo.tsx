
import React from "react";

const KICLogo: React.FC<{ size?: number }> = ({ size = 100 }) => {
  const scale = size / 200;
  
  const styles = {
    logo: {
      position: 'relative',
      width: `${size}px`, 
      height: `${size}px`,
    } as React.CSSProperties,
    centerCircle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: `${30 * scale}px`,
      height: `${30 * scale}px`,
      background: '#5d1791',
      border: `${10 * scale}px solid white`,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
    } as React.CSSProperties,
  };

  const renderSpokes = () => {
    const spokes = [];
    const spokeCount = 8;
    
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i * 360) / spokeCount;
      const isOrange = i === 1;
      
      // Spoke line
      spokes.push(
        <div
          key={`spoke-${i}`}
          style={{
            position: 'absolute',
            width: `${3 * scale}px`,
            height: `${60 * scale}px`,
            background: isOrange ? '#ff9800' : 'white',
            top: '50%',
            left: '50%',
            transformOrigin: 'top center',
            transform: `translate(-50%, -100%) rotate(${angle}deg)`,
          }}
        />
      );
      
      // Circle at the end of spoke
      const rad = 80 * scale;
      const x = (size / 2) + rad * Math.cos((angle * Math.PI) / 180);
      const y = (size / 2) + rad * Math.sin((angle * Math.PI) / 180);
      
      spokes.push(
        <div
          key={`circle-${i}`}
          style={{
            position: 'absolute',
            width: `${20 * scale}px`,
            height: `${20 * scale}px`,
            background: isOrange ? '#ff9800' : 'white',
            borderRadius: '50%',
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      );
    }
    
    return spokes;
  };
  
  return (
    <div style={styles.logo}>
      <div style={styles.centerCircle} />
      {renderSpokes()}
    </div>
  );
};

export default KICLogo;
