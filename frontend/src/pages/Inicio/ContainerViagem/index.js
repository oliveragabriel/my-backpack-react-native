import React from "react";
import { ContainerVazio } from "../ContainerVazio";
import { ContainerProximaViagemInicio } from "../ContainerProximaViagem";

export const ContainerViagem = ({navigation, nextTravel}) => {
  
    const handleNextTravelContainer = () => {
        return (nextTravel.empty) ? (
            <ContainerVazio
                title="Próxima Viagem"
                onPress={() => navigation.navigate('Cadastro Viagem')}
            />
        ) : (
            <ContainerProximaViagemInicio 
                title="Próxima Viagem"
                name={nextTravel.title}
                departure_date={nextTravel.arrivalDate.split('T')[0]}
                country={""}
                day={nextTravel.days}
                activity={nextTravel.activities}
                onPress={() => navigation.navigate('Viagem Detalhe', {id: nextTravel.id})}
            />
        );
    };

    return (
        <>
            {handleNextTravelContainer()}
        </>
    )

}

