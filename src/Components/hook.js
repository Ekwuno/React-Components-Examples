import React, { useState, useEffect } from 'react';

const Hookiy = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});
	return (
		<div>
			<p>You have clicked the button {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click button</button>
		</div>
	);
};

export default Hookiy;
