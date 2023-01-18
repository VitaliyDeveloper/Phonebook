import styled from 'styled-components';

export const LoadingContainer = styled.div`
	width: 100px;
	height: 100px;

	& > div {
	width: 100%;
	height: 100%;
	border: 1px solid #fff;
	border-radius: 50%;
	}

	& span {
		background: #fff;
		display: block;
		width: 15%;
		height: 15%;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		transform: translate(-50%,0);
		transform-origin: 0,49px

		&:first-child {
			background: rgba(25,190,155,1);
			animation: effect-4-1 1.5s infinite linear;
		}

		&:nth-child(2) {
			background: rgba(255,255,255,1);
			animation: effect-4-1 2s infinite linear;
		}

		&:nth-child(3) {
			background: rgba(230,75,60,1);
			animation: effect-4-1 2.5s infinite linear;
		}

		&:nth-child(4) {
			background: rgba(50,70,95,1);
			animation: effect-4-1 3s infinite linear;
		}
    }
	

@-webkit-keyframes effect-4-1 { 
	from{
		transform:rotate(0deg);
	}
	to{
		transform:rotate(360deg);
	}
}

@keyframes effect-4-1 {
	from{
		transform:rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
`;
