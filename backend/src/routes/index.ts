import { Application } from 'express';
import { TravelRoutes } from './TravelRoutes';
import { UserRoutes } from './UserRoutes';

export const initializeRoutes = (app: Application) => {
    new TravelRoutes(app);
    new UserRoutes(app);
}