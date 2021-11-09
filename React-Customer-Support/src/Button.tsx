import React from 'react';

export interface props {
  name: string;
}

export function Button({ name }: props) {
  return <div>hi {name}</div>;
}
