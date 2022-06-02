import { Application } from 'express';
import { Accomodation } from '../entity/Accomodation';
import { Activity } from '../entity/Activity';
import { Transport } from '../entity/Transport';
import { Travel } from '../entity/Travel';
import { TravelDay } from '../entity/TravelDay';
import { User } from '../entity/User';
import { Wish } from '../entity/Wish';
import { Route } from './Route';


export const initializeRoutes = (app: Application) => {
    new Route(app, Accomodation, 'accomodations', 'travels');
    new Route(app, Activity, 'activities', 'traveldays');
    new Route(app, Transport, 'transports', 'travels');
    new Route(app, Travel, 'travels', 'users');
    new Route(app, TravelDay, 'traveldays', 'travels');
    new Route(app, User, 'users');
    new Route(app, Wish, 'wishes', 'users');
}