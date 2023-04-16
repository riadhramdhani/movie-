import React from "react";
import GoogleMapReact from "react-google-maps";
import styled from "styled-components";

// Styled components for the landing page
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

// Landing page component
const LandingPage = () => {
  const center = { lat: 0, lng: 0 }; // Center coordinates for the map

  return (
    <Container>
      <div>
        <Title>Welcome to My Maps App</Title>
        <Subtitle>Explore the world with ease</Subtitle>
        <MapContainer>
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={2}
            // Add your Google Maps API key here
            bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          />
        </MapContainer>
        <Button>Get Started</Button>
      </div>
    </Container>
  );
};

export default LandingPage;