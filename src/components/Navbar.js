import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
`;

const Left = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex: 1;
`;
const Center = styled.div`
	flex: 1; ;
`;
const Right = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: flex-end;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 1px solid #e6e6e6;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	outline: none;
`;

const Logo = styled.h1`
	font-weight: bold;
	text-align: center;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-right: 20px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: "grey", fontSize: 14 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>GLAMISHMA.</Logo>
				</Center>
				<Right>
					<MenuItem>Resister</MenuItem>
					<MenuItem>Sign In</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary" overlap="rectangular">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
