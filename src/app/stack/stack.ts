export class DSStack
{
	stackData;
  stackPointer;
  
  constructor()
	{
		this.stackData = [];
		this.stackPointer = -1 // 0 indexed when we add items
  }

	top()
	{
		return this.stackData[this.stackPointer];
	}

	push(value)
	{
		++this.stackPointer;
		this.stackData[this.stackPointer] = value;
	}

	pop()
	{
		if (this.stackPointer > -1)
		{
			let val = this.stackData[this.stackPointer];
			delete this.stackData[this.stackPointer];
			this.stackPointer--;
			return val;
		}
	}
}