import { setHttpClientAndAgentOptions } from 'next/dist/server/config';
import React from 'react';

export default function Addshop() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            onChange={onChange}
            name="title"
            value={shop.title}
            required
            placeholder="Title..."
          />
        </div>
      </form>
    </div>
  );
}
