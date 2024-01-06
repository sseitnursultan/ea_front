import React, {SyntheticEvent, useState} from 'react';
import {Col, Button, Row, Container, Card, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './Register.scss'


interface RegisterProps {
}

export const Register: React.FC<RegisterProps> = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [responseStatus, setResponseStatus] = useState<number | null>(null); // Или другой тип данных в зависимости от ожидаемого ответа
    const [responseError, setResponseError] = useState<string>('');


    const [nameDirty, setNameDirty] = useState<boolean>(false);
    const [lastNameDirty, setLastNameDirty] = useState<boolean>(false);
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);

    const [nameError, setNameError] = useState<string>('Имя не может быть пустым');
    const [lastNameError, setLastNameError] = useState<string>('Last Name не может быть пустым');
    const [emailError, setEmailError] = useState<string>('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState<string>('Password не может быть пустым');

    const validateEmail = (value: string): boolean => {
        setEmailDirty(true);
        if (!value) {
            setEmailError('Email не может быть пустым');
            return false;
        }
        // Добавляем базовую проверку email (можно расширить эту проверку)
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        if (!isValidEmail) {
            setEmailError('Введите корректный email');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validateName = (value: string): boolean => {
        setNameDirty(true);
        if (!isNaN(Number(value))) {
            setNameError('Имя должно быть строкой');
            return false;
        }
        setNameError('');
        return true;
    };

    const validateLastName = (value: string): boolean => {
        setLastNameDirty(true);
        if (!isNaN(Number(value))) {
            setLastNameError('Last Name должно быть строкой');
            return false;
        }
        setLastNameError('');
        return true;
    };

    const validatePassword = (value: string): boolean => {
        setPasswordDirty(true);

        // Регулярное выражение, которое проверяет наличие минимум 8 символов,
        // как минимум одной заглавной буквы, одной строчной буквы и отсутствие спец. символов
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{8,}$/;

        if (!passwordRegex.test(value)) {
            setPasswordError('Пароль должен содержать минимум одну заглавную и одну строчную букву, без спец. символов, длиной не менее 8 символов');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const submit = async (e: SyntheticEvent): Promise<void> => {
        e.preventDefault();

        const isNameValid: boolean = validateName(name);
        const isLastNameValid: boolean = validateLastName(lastName);
        const isEmailValid: boolean = validateEmail(email);
        const isPasswordValid: boolean = validatePassword(password);

        if (isNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
            // Все данные валидны, отправляем запрос
            const response = await fetch(process.env.REACT_APP_BACK_URL + '/auth/authorize' , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    lastName,
                    email,
                    password,
                }),
            })


            if(!response.ok){
                throw new Error('Error')
            }

            const responseData = await response.json()
            setResponseStatus(response.status);

            if(responseStatus === 200){
                navigate('/login');
            }
            else{
                navigate('/register')
            }
        }
    };

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <div className="mb-3">
                                        <Form onSubmit={submit}>
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center">Name</Form.Label>
                                                <Form.Control
                                                    onChange={(e) => setName(e.target.value)}
                                                    onBlur={(e) => validateName(e.target.value)}
                                                    type="text"
                                                    placeholder="Enter Name"
                                                    value={name}
                                                />
                                                {nameDirty && <div className="text-danger">{nameError}</div>}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="lastName">
                                                <Form.Label className="text-center">Last Name</Form.Label>
                                                <Form.Control
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    onBlur={(e) => validateLastName(e.target.value)}
                                                    type="text"
                                                    placeholder="Enter Last Name"
                                                    value={lastName}
                                                />
                                                {lastNameDirty && <div className="text-danger">{lastNameError}</div>}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">Email address</Form.Label>
                                                <Form.Control
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    onBlur={(e) => validateEmail(e.target.value)}
                                                    type="email"
                                                    placeholder="Enter email"
                                                    value={email}
                                                />
                                                {emailDirty && <div className="text-danger">{emailError}</div>}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    onBlur={(e) => validatePassword(e.target.value)}
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                />
                                                {passwordDirty && <div className="text-danger">{passwordError}</div>}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};