import { Country } from 'country-state-city';
import { v4 } from 'uuid'
import type CountryMapped from '../models/Country.model';

export const getCountry = () : CountryMapped[] => {
    const allCountrys = Country.getAllCountries()
    const countrysMapped : CountryMapped[] = allCountrys.map(country => {
        return {
            name: country.name,
            flag : country.flag,
            id: v4()
        }
    })
    return countrysMapped
}