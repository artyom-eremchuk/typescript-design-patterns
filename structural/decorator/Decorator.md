# Decorator

Паттерн «Декоратор» — это структурный шаблон в программировании, который открывает возможность подключать дополнительную функциональность к объектам в динамическом режиме.

Паттерн «Декоратор» часто называют шаблоном «обертка». Второе название наиболее точно описывает действие паттерна, потому что при его использовании берется некий объект и «оборачивается» в совершенно новые свойства. По сути, получается новый объект на основе старого.

И новый, и старый объект имеют один интерфейс. Поэтому для конечного пользователя «обертывание» оставляет тот же принцип работы с объектом. Меняются только свойства, заложенные в «обертке».

Работу паттерна «Декоратор» можно проследить в жизни. Человек — это обычный объект. Одежда на человеке — это паттерн «Декоратор» или «обертка». Неважно, как одет человек, — он всегда остается одним и тем же человеком с основным набором свойств. Однако, когда человек выходит зимой на улицу — важно одеться, чтобы не замерзнуть. Если человек занимается спортом — важно, чтобы одежда соответствовала. Если у человека на работе дресс-код «строгий стиль», значит, он должен надеть «строгую» одежду, а не прийти в спортивном костюме. То есть разная одежда — это свойства разных классов: «зима», «спорт», «работа» и др.

## Применимость

Паттерн «Декоратор» применяется в том случае, когда объекту необходимо придать какие-то дополнительные свойства в динамическом режиме. Но когда потребность в этих свойствах исчезнет, они должны быть сняты с объекта. Также он применяется в том случае, когда невозможно применить наследование:

- когда объекту нужно придать множество разных свойств, а для каждого свойства нужно определить собственный класс, таким образом, количество классов очень сильно «раздуется»;
- когда с объекта нужно «снять» весь основной функционал и временно придать другой, но с сохранением основного;
- когда нужно наследовать поведение от множества классов и придать их одному объекту;

## Плюсы vs. Минусы

Плюсы:

- высокую гибкость, по сравнению с наследованием;
- динамическое придание свойств объекту;
- множественное придание свойств одному объекту;

Минусы:

- усложненную конфигурацию объектов при многократном «обертывании» одного и того же объекта;
- множество небольших классов.
