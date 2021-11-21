# Quest Assignment
This project was generated with `ng new` command with `--skip-tests` and `--skip-install` flags.

`--skip-tests` was used since testing seemed unnecessary for an app of this size.
`--skip-install` was used because this project uses `yarn` as package manager instead of `npm`.

# Dependencies

- `Node Package Manager (NPM)`
- `Yarn`
- `Angular 13`
- `SubSink`
- `RxJs`

# How to install
- Navigate to root directory from **CLI** *(Command Line Interface)*.
- **Optional** If you don't have yarn installed globally, run this command to install it `npm i -g yarn` (prefix with `sudo` for linux systems).
- Execute command `yarn` *(or `yarn i`, if you preffer)*. 
This will install `angular` locally, so you don't have to install it globally.
- To run the application, type `ng serve -o`, with `-o` flag meaning: *open browser tab automatically*.
---
# Why RxJs and SubSink?

As you may have noticed, this project depends on RxJs and SubSink.

SubSink dependency is only used to make storing and destroying subscriptions easier.
The main question here is - *why RxJs*?

1) RxJs introduces reactive approach
2) Application can be easily optimized to run even faster with OnPush strategy due to reactive approach
3) Data can be reflected in UI asynchronously *(Only if subscriptions are set up the right way (usually using `async` pipe))
4) Any change in source observable results in equivalent change in UI
5) We can subscribe to **Observables** and listen for changes, only doing certain actions when they changed *(which is the reason why it's called reactive approach in the first place)*
---
# Final word

This is a rather short project, but even though it's small, it has actually received some care.
The app is responsive (thanks to media queries and `display: grid` with some `repeat` and `auto-fit` magic.

For any furher questions, feel free to [contact me](mailto:it.kristijan.jovic@gmail.com?subject=Assignment%20Contact)
