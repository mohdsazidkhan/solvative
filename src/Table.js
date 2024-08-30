import React from 'react';

const Table = ({ cities, loading }) => {
  if (loading) return <div className="spinner">Loading...</div>;
  if (!cities.length) return <div className="no-result">No Result Found</div>;

  return (
    <div className='responsiveTable'>
    <table className="city-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Place Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city, index) => (
          <tr key={city.id}>
            <td>{index + 1}</td>
            <td>{city.name}</td>
            <td>
              <img
                src={`https://flagsapi.com/${city.countryCode}/flat/24.png`}
                alt={`${city.country} flag`}
                className="flag"
              />{' '}
              {city.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
