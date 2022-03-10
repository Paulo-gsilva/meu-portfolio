import callAll from './modules/Prices';
import attBalance from './modules/Balance';
import importName from './modules/User';
import load from './modules/Loading';
import './assets/css/portfolio.css';

load();
callAll();
attBalance();
importName();