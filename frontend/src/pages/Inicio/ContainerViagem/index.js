import React from "react";
import { ContainerVazio } from "../ContainerVazio";
import { ContainerProximaViagemInicio } from "../ContainerProximaViagem";

export const ContainerViagem = ({navigation, nextTravel, flagTravel}) => {

  const handleNextTravelContainer = () => {
    //console.log(nextTrip, "nexttrip");
  
    if (flagTravel) {
      return (
        <ContainerProximaViagemInicio 
          title="Próxima Viagem"
          name="a definir"
          departure_date={nextTravel.departure_date}
          country={nextTravel.title}
          day={nextTravel.days}
          activity={nextTravel.activities}
          onPress={() => navigation.navigate('Viagem Detalhe')}
        />
      )
    }
    return (
      <ContainerVazio
        title="Próxima Viagem"
        onPress={() => navigation.navigate('Editar Viagem')}>
      </ContainerVazio>
    )
  };

  return (
    <>
    {handleNextTravelContainer()}
    </>
  )

}

