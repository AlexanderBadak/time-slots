# Company Time Slots

A tiny app to improve time slot reservation making.

## Getting Started

### Dependencies

* No prerequisites necessary other than a REST API providing the data
* Currently my own free REST API is hardcoded but it can easily be replaced

### Executing program

* npm or yarn install
```
npm or yarn install
```
* Step-by-step bullets
```
npm start or yarn run
```
## Chaning the REST API

* open file src/services/api-service.ts
* replace the host parameter in the instantiation (line 15)
```
export const apiService = new ApiService('YOUR HOST HERE')
```
* replace url query directory in the fetch companies method (line 12)
```
await this.httpClient.get<TCompanyResponse[]>('YOUR URL QUERY DIRECTORY')
```